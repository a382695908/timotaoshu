var express = require('express');
var router = express.Router();
// var common = require('../../tool/common');
const { tool, db, log,path,fs } = require("../../tool/require");

/* GET home page. */
router.use('', async function(req, res, next) {
    let catalogId = req.query.catalogId || req.body.catalogId;
    let bookId = req.query.bookId || req.body.bookId;
    let num = req.query.num || req.body.num;
    let bookConfig = {
        huyan:req.cookies.huyan || '',
        light:req.cookies.light || '',
        fontSize:req.cookies.fontSize || 'big'
    };

    let error = "";
    if(!bookId) error = "没有bookId";
    if(!catalogId) error = "没有catalogId";
    if(!num) error = "没有num";
    if(error) {
        // res.render('pages/book/catalogInfo', { myUrl:'/book/catalogInfo', error});
        res.send(error);
        return;
    }

    let bookListSql = `select * from book where id=${bookId}`;
    
    let bookList = await db.query(bookListSql);
    

    let catalogListSql = `select * from (select * from catalog where bookId=${bookId} and num < ${num} order by num desc limit 0,1)a union all select * from (select * from catalog where bookId=${bookId} and num >= ${num} order by num limit 0,2 )b`;
    
    let catalogList = await db.query(catalogListSql);
    

    let catalog, book, catalogName, prevCatalog,nextCatalog;

    book = bookList[0];
    /*
    * 当第一个catalog里的num序号等于传来的序号时， 那么代表该catalog是本书要查询的章节，也是本书的第一章
    * 当第二个catalog里的num序号等于传来的序号时， 那么代表该catalog是本书要查询的章节，不是第一章
    * 如果num 都没有匹配到的话，那么返回信息错误
    * */
    if(num == catalogList[0].num && catalogList[0].id == catalogId) {
        catalog = catalogList[0];
        if(catalogList.length == 2) {
            nextCatalog = catalogList[1];
        }
    } else if(num == catalogList[1].num && catalogList[1].id == catalogId) {
        prevCatalog = catalogList[0]
        catalog = catalogList[1];
        if(catalogList.length == 3) {
            nextCatalog = catalogList[2];
        }
    } else {
        error = 'catalogId、bookId、num信息不匹配';
        // res.render('pages/book/catalogInfo', { myUrl:'/book/catalogInfo', error});
        res.send(error);
        return;
    }

    catalogName = catalog.name;
    let bookName = book.name;

    let oldContainer = "";
    var txtPath = path.join(__dirname, '../../../books/' + bookId + "/" + catalogId + ".txt");
    try{
        oldContainer = fs.readFileSync(txtPath, 'utf-8').toString();
    }catch(err1) {
        var txtPath1 = path.join(__dirname, '../../../books/' + bookId + "/" + tool.jiami(catalogId) + ".txt");
        try {
            
            oldContainer = fs.readFileSync(txtPath1, 'utf-8').toString();
        } catch(err) {
            console.log("bookListSql:", bookListSql);
            console.log("bookList:", bookList);
            console.log("catalogListSql:", catalogListSql);
            console.log("catalogList:", catalogList);
            console.log("txtPath:", txtPath);
            console.log(err1);
            console.log("txtPath1:", txtPath1);
            console.log(err);
            // res.send(tool.toJson(null, '没有该文本', 1002));
            // return;
        }
    }
    let container = "<p>";
    container += oldContainer.replace("<br/>","<br>").split("<br>").join("</p><p>");
    container += "</p>";


    let site = {
        id:book.id,
        title:book.name,
        keywords:`${book.name},${catalog.name}`,
        description:tool.filterHtml(book.description)
    };

    let catalogInfo = {
        book: book,
        prevCatalog:prevCatalog,
        catalog: catalog,
        nextCatalog:nextCatalog,
        container: container
    }

    console.log("catalogInfo:", catalogInfo);




    res.render('pages/book/catalogInfo', { myUrl:'/book/catalogInfo',catalogInfo,site,bookConfig});
});

module.exports = router;

var albumPath = '../galeria/album2'
var title = "Forum 2004";
var slidesFolder = `${albumPath}/slides`;
var htmlTemplateFile = './index_template.html';
var targetHtmlFile = `${albumPath}/new_index.html`;

const fs = require('fs');

function createGalleryFromFiles(files) {
    // <img src="./slides/PICT1390.JPG" alt="adf" onclick="openImage('PICT1390.JPG')">
    return files.map(f => `<img src="./slides/${f}" alt="${f}" onclick="openImage('${f}')">`);
}

fs.readdir(slidesFolder, (err, files) => {
  let jpgFiles = files.filter(f => f.toLowerCase().endsWith('.jpg'))
  let results = createGalleryFromFiles(jpgFiles).join('\n');
//   results.forEach(file => {
//     console.log(file);
//   });

  fs.readFile(htmlTemplateFile, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    var result = data.replace(/{title}/g, title).replace(/{content}/g, results);
  
    fs.writeFile(targetHtmlFile, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
});


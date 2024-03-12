var htmlTemplateFile = './index_template.html';
const fs = require('fs');

function createGalleryFromFiles(files) {
    // <img src="./slides/PICT1390.JPG" alt="adf" onclick="openImage('PICT1390.JPG')">
    return files.map(f => `<img src="./slides/${f}" alt="${f}" onclick="openImage('${f}')">`);
}

function redesign(albumPath, title) {
  let slidesFolder = `${albumPath}/slides`;
  let targetHtmlFile = `${albumPath}/new_index.html`;

  fs.readdir(slidesFolder, (err, files) => {
    let jpgFiles = files.filter(f => f.toLowerCase().endsWith('.jpg'))
    let results = createGalleryFromFiles(jpgFiles).join('\n');
  
    fs.readFile(htmlTemplateFile, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
  
      let imagesMap = jpgFiles.map(f => `'${f}'`).join(',');
      let imageInitInScript = `images = [${imagesMap}];`;
      var result = data.replace(/{title}/g, title).replace(/{content}/g, results).replace(/{initImageGallery}/g, imageInitInScript);
    
      fs.writeFile(targetHtmlFile, result, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });
  });
  
  fs.copyFile('style.css', albumPath + '/style.css', (err) => { if (err) return console.log(err); });
  fs.copyFile('script.js', albumPath + '/script.js', (err) => { if (err) return console.log(err); });
}

// redesign('../galeria/album2', 'Forum 2004');
// redesign('../galeria/album3', 'Głotowo z okna');
// redesign('../galeria/album4', 'Kościół Głotowo 2004');
// redesign('../galeria/album5', 'Przedwojenne widokówki z Głotowa');
// redesign('../galeria/album6', 'Wiosna 2004');
// redesign('../galeria/album7', 'Forum Ewangelizacyjne 2003');
// redesign('../galeria/album9', 'Spotkanie 20 lat po maturze - 13.05.2006 r.');
// redesign('../galeria/album10', 'Swobodno - nabożeństwo majowe');
// redesign('../galeria/album16', 'Zdjęcia Dom Pielgrzyma');
redesign('../galeria/album17', 'Forum Ewangelizacyjne 2008');
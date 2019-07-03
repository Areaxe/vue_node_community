// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {
        resolve: function(id,basefir,importOptions) {
            if(id.match('style') && id.match('style').index === 0){
                return Path2D.join(__dirname,'src/style',id.sunstr(5));
            }
        }
    },
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}

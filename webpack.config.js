const path=require('path')

module.exports={
    entry:`./app/index.js`,
    output:{
        filename: 'main.js',
        path:path.resolve(__dirname,'dist')
    },
    watch:true,
    watchOptions:{
        ignored: /node_modules/
    }
}
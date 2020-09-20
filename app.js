var fs = require('fs')

// var resd_string = fs.readFileSync('text.txt', 'utf8')

// console.log(resd_string)

// fs.writeFileSync('text2.txt', resd_string);

// var resd_string = fs.readFile('text.txt', 'utf8', function(err, data) {
//     if (err) return console.error(err)
//     console.log(data)
// })
    
// console.log('this file is read')
// fs.writeFile('text3.txt', resd_string, function(err, data) {
//     if (err) return console.error(err)
//     console.log('success !!!')
// })

// fs.unlink('text2.txt', function(err, data) {
//         if (err) return console.error(err)
//         console.log('success delete !!!')
//     })

fs.rmdirSync('node')
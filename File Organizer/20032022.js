// File ko read kese krte hai
let fs = require("fs")
let path = require("path")
let minimist = require('minimist')
let args  = minimist(process.argv)
let types = {
    media: [".mp4", ".mkv"],
    archives: ['.zip', '.7z', '.rar', '.tar', '.gz', '.ar', '.iso', ".xz"],
    documents: ['.docx', '.doc', '.pdf', '.xlsx', '.xls', '.odt', '.ods', '.odp', '.odg', '.odf', '.txt', '.ps', '.tex'],
    app: ['.exe', '.dmg', '.pkg', ".deb"],
    images: ['.jpeg', '.png', '.jpg']
}
let patth = args.url 
let files = fs.readdirSync(patth);
for (let i = 0; i < files.length; i++) {
    let patth1 = patth + '/organized folder';
    // patth1 = "./Sample/organized folder"
    if (!fs.existsSync(patth1)) {
        fs.mkdirSync(patth1)
    }
    if (fs.lstatSync(patth + "/" + files[i]).isFile()) {
        let category = getCategory(files[i])
        if (category == undefined) {
            category = "others"
        }
        // let patth1 = path.join(patth , "organized folder")
        let category_path = patth1 + "/" + category;
        if (fs.existsSync(category_path) == false) {
            fs.mkdirSync(category_path)
        }
        // let file_name = path.basename(files[i])
        fs.copyFileSync(patth + "/" + files[i], category_path + "/" + files[i]);
        fs.unlinkSync(patth+"/"+files[i])
        console.log(files[i] + " is copied successfully")
    }
}
function getCategory(file) {
    let file_exten = path.extname(file)
    for (let type in types) {
        let arr = types[type]
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == file_exten) {
                return type
            }
        }
    }
}


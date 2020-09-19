  //ファイル生成
function SaveToFile(FileName,Stream) {
    
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(new Blob([Stream], { type: "text/plain" }), FileName);
  } else {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([Stream], { type: "text/plain" }));
    //a.target   = '_blank';
    a.download = FileName;
    document.body.appendChild(a) //  FireFox specification
    a.click();
    document.body.removeChild(a) //  FireFox specification
  }
}

//ファイル作るくん
function Make_file() {
    let Name = document.getElementById("name").value;
    let Txt = document.getElementById("txt").value;
    let Extension = document.getElementById("extension").value;

    let Stream = Txt;
  SaveToFile(Name + '.' + Extension ,Stream);
}


//manifest生成
function Manifest() {
    let Name = document.getElementById("name").value;
    let Description = document.getElementById("description").value;
    let Type = document.getElementById("type").value;
    
    let Uuid_1 = Uuid();
    let Uuid_2 = Uuid();
    
    switch (Type) {
        case "r":
        Type = "resources";
        break;

        case "b" :
        Type = "data";
        break;

        default:
            alert("エラー発生...\n時間を空けてお試しください");
            break;
    }
    //nameが空白かどうかをチェックズル
    if(Name == "") {
        alert("error :\nPack_nameが空白になっています\nPack_nameを入力してください");
        return false;
    }
    else {
        
    }
    //生成するjsonの基本の形
    let Datajson = {
	"format_version": 2,
	"header": {
		"description": Description,
		"name": Name,
		"uuid": Uuid_1,
		"version": [
			1,
			0,
			0
		],
		"min_engine_version": [
			1,
			16,
			0
		]
	},
	"modules": [
		{
			"description": Description,
			"type": Type,
			"uuid": Uuid_2,
			"version": [
				1,
				0,
				0
			]
		}
	]
};
let Encodejson = JSON.stringify(Datajson, null , 2);
let Stream = Encodejson;
    SaveToFile('manifest.json',Stream);
}

//uuid生成
function Uuid() {
    let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
    for (let i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
            case "x":
                chars[i] = Math.floor(Math.random() * 16).toString(16);
                break;
            case "y":
                chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                break;
        }
    }
    return chars.join("");
}
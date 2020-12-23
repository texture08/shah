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
    //nameが空白かどうかをチェックする
    if(Name == "") {
        alert("error :\nPack_nameが空白になっています\nPack_nameを入力してください");
        return false;
    }else {
    }

    //descriptionが空白かどうかをチェックする
    if(Description == "") {
        Description = "undefine"
    }else {

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

////////////ゆにこーど////////////
//エンコード
function encode() {
	document.unicode.reset();
	
    let Txt = document.getElementById("txt").value;

    const encode = escape(Txt).replace(/%/g, '\\');
    let Unicode = document.getElementById("unicode");
    Unicode.innerHTML = encode;
}

//デコード
function decode() {
	document.txt.reset();
	
    let Unicode = document.getElementById("unicode").value;

    const encode = unescape(Unicode.replace(/\\/g, '%'));
    let Text = document.getElementById("txt");
    Text.innerHTML = encode;
}

//pack.mcmetaの生成
function pack_meta() {
    let Format = document.getElementById("format").value;
    let Description = document.getElementById("description").value;
    
    //nameが空白かどうかをチェックする
    if(Format == "") {
        alert("error :\nPack_Formatが空白になっています\nPack_Formatを入力してください");
        return false;
    }else {　//そうでなかった場合は数値に変換
        Format = parseFloat(Format);
    }

    //descriptionが空白かどうかをチェックする
    if(Description == "") {
        Description = "undefine";
    }else {
    }

    //生成するjsonの基本の形
    let Datajson = {
        "pack": {
          "pack_format": Format,
          "description": Description
        }
      };
let Encodejson = JSON.stringify(Datajson, null , 2);
let Stream = Encodejson;
    SaveToFile('pack.mcmeta',Stream);
}

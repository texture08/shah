function fileChanged(input) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const pre = document.getElementById('pre1');
        pre.innerHTML = JSON.stringify(reader.result);
      };
  
      reader.readAsBinaryString(file);
}

function Foo() {
    let Encodejson = JSON.stringify(reader.result, null , 2);
    let Stream = Encodejson;
    SaveToFile('test.json',Stream);
}
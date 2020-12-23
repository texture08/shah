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

function ipfsRequest (file_name, data) {
  const ipfsNode = document.querySelector("#nodeIPFS").value
  const ipfsProtocol = document.querySelector("#protocolIPFS").value
  var ipfs = window.IpfsHttpClient(ipfsNode, {protocol: ipfsProtocol})
  var file_send =
  [
   {
     path: file_name,
     content: data
   }
 ]
  return new Promise((resolve, reject) => {
      ipfs.add(file_send, function (err, json) {
        if (err) {
          alert(err);
          reject (0)
        } else {
          resolve (json)
        }
      })
  })
}

function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  })
}

async function uploadToIPFS(file) {
      const arrayBuffer = await readFileAsync(file);
      const data = await ipfsRequest (file.name, buffer.Buffer(arrayBuffer)).then(response => response);
      console.log(JSON.stringify(data[0]))
      return data[0]
  }

async function handleFiles(files){
    const file = files[0]
    document.querySelector("#response").innerText = "Uploading file..."
    const response = await uploadToIPFS(file)
    document.querySelector("#response").innerText = JSON.stringify(response, null, 2)
}

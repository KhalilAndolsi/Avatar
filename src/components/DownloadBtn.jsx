const DownloadBtn = ({url}) => {
  const downloadMeme = async () => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const link = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = link;
      a.download = "Avatar.png";
      a.click();
      URL.revokeObjectURL(link);
    } catch {
      alert("The Download Is Failed!")
    }
  }
  return (
    <button className='bg-white rounded-full py-2 px-4 font-semibold' onClick={downloadMeme}>Save</button>
  )
}

export default DownloadBtn
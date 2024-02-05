import copy from 'copy-to-clipboard';

const CopyBtn = ({url}) => {
  return (
    <button className='bg-white rounded-full py-2 px-4 font-semibold' onClick={() => copy(url)}>Copy</button>
  )
}

export default CopyBtn
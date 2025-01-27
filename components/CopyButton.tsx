import { Copy } from 'lucide-react'
import React, { useState } from 'react'

const CopyButton = () => {
    const [copied, setCopied] = useState(false);
  return (
    <div>
        <button className='mt-5 bg-[#076871] px-3 py-2 rounded font-bold flex gap-2 items-center'><Copy/> Copy My Email</button>
    </div>
  )
}

export default CopyButton
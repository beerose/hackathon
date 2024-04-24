interface JudgeProps {
  name: string
  img: string
  title: string
  url: string
}

export default function Judge({ img, name, title, url }: JudgeProps) {
  return (
    <a href={url} className="outline-none no-underline hover:no-underline">
      <div className="text-white flex flex-col items-center space-y-4">
        <div className="w-24 h-24 border border-primary rounded-[4px] text-white relative">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover rounded-[4px]"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0"
              style={{
                background: 'repeating-linear-gradient(transparent, transparent 3px, rgba(0, 0, 0, 0.1) 3px, rgba(0, 0, 0, 0.1) 6px)'
              }}></div>
        </div>
        <div className="flex flex-col items-center font-bold">
          <span className="text-lg">{name}</span>
          <span className="text-[14px] text-primary">{title}</span>
        </div>
      </div>
    </a>
  )
}

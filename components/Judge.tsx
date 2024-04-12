interface JudgeProps {
  name: string
  img: string
  title: string
}

export default function Judge({ img, name, title }: JudgeProps) {
  return (
    <div className="text-white flex flex-col items-center space-y-2">
      <div className="w-24 h-24 border border-primary rounded-[4px] text-white">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover rounded-[4px]"
        />
      </div>
      <div className="flex flex-col items-center font-bold">
        <span className="text-lg">{name}</span>
        <span className="text-[14px] text-primary">{title}</span>
      </div>
    </div>
  )
}

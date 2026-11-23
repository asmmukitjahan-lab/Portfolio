

const Container = ({children,className}) => {
  return (
    <div className={`container lg:max-w-[941px] xl:max-w-[1300px] ${className}`}>
        {children}
    </div>
  )
}

export default Container;
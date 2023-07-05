
type MyProps = {
    title: string
    desc?: String
}

export default function Header(props: MyProps) {
    return (
        <div
            className='break-words mt-10 text-black text-center mx-0 my-0 font-bold  md:text-7xl text-5xl'
        >
            {props.title}
            <div className="heading-info1 w-full text-center break-words pt-4 font-semibold text-2xl ">

                {props.desc}

            </div>
        </div>
    )
}
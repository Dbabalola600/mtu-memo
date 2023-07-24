import Link from "next/link"





type ButtonProps = {
    title: String | any
    uLink: string |any
}








export default function NavButton(props: ButtonProps) {
    return (
        <Link
            href={props.uLink}
        >

            <div className="btn btn-lg btn-primary text-white btn-block  mb- text-center ">
                {props.title}
            </div>
        </Link>


    )
}
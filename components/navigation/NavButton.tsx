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

            <div className="btn btn-lg btn-primaryColour btn-block mt-5 mb-5 text-center ">
                {props.title}
            </div>
        </Link>


    )
}
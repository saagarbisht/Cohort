import {Link} from "react-router-dom"
export default function Bottom({lable,text,to}) {
    return (
        <div className="flex text-sm justify-center mt-4 gap-1">
            <div className="">{text}</div>
            <Link to={to} className="cursor-pointer underline">
                {lable}
            </Link>
        </div>
    )
}

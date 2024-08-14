import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
        <div className="flex justify-center items-center p-2 mt-10">
            <p className="text-sky-50 text-lg italic text-center m-3">Connect:</p>
            <SocialIcon url="https://www.linkedin.com/harley-davey/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
            <SocialIcon url="https://www.github.com/jhdavey" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
        </div>

        
    )
}
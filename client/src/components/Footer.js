import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
        <div className="relative bottom-0 flex justify-center items-center w-full">
            <p className="text-sky-50 italic ">Let's bring your vision to reality!</p>
            <div className="inline-flex py-1 px-3 py-3">
                    <SocialIcon url="https://www.linkedin.com/in/joshua-davey-16265a241/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
                    <SocialIcon url="https://www.github.com/jhdavey" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
                </div>

        </div>
    )
}
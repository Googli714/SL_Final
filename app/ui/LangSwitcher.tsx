'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

async function LangSwithcer() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const languages = ['en', 'ge'];


    function handleChangeLanguage(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('lang', term);
        } else {
            params.delete('lang');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <select defaultValue='en' value={searchParams.get('lang')!} onChange={(e) => handleChangeLanguage(e.target.value)} className="border border-gray-300 p-1 rounded-md text-gray-900">
            {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
            ))}
        </select>
    )
}

export default LangSwithcer;
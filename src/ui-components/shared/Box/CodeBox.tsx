"use client"
import { useState } from 'react';
import { Clipboard, Check  } from 'lucide-react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface highlighterProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
}

const yourElementStyle = {
    background: 'transparent',
    maxHeight: '500px',
    borderRadius: '0px',
    fontSize: 16,
    border: 0,
    margin: 0,
};

export default function Highlighter({ code, language = "jsx", showLineNumbers = true }: highlighterProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(code);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    return (
        <div className="group relative overflow-hidden rounded-sm">
            <SyntaxHighlighter className="codebox" customStyle={yourElementStyle} showLineNumbers={showLineNumbers} language={language} style={docco}>
                {code.trim()}
            </SyntaxHighlighter>
            <button
                onClick={() => {
                    handleCopy();
                    // sendGAEvent
                }}
                className="invisible absolute right-3 top-2 z-50 rounded-md border p-1 group-hover:visible"
            >
                {isCopied ? <Check size={16} /> : <Clipboard size={16} />}
            </button>
        </div>
    );
}
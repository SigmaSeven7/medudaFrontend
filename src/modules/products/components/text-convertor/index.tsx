"use client"
import React, { useState, useEffect } from 'react';

interface ClientProps {
    title: string;
    metadata: string; // Updated type to string since you mentioned it's received as a string
}

const TextConvertor: React.FC<ClientProps> = ({ title, metadata }) => {
    // Initialize state to store the current language
    const [lang, setLang] = useState(document.documentElement.lang);

    // Safely parse metadata from string to object
    const parseMetadata = (metadataString: string): object => {
        try {
            return JSON.parse(metadataString);
        } catch (error) {
            console.error("Failed to parse metadata:", error);
            return {}; // Return an empty object in case of error
        }
    };
    const metadataObj: { [key: string]: string } = parseMetadata(metadata) as { [key: string]: string };
    console.log(metadataObj);
    useEffect(() => {
        // Function to update state when the lang attribute changes
        const updateLang = () => {
            setLang(document.documentElement.lang);
        };

        // Listen for changes to the lang attribute
        const observer = new MutationObserver(updateLang);

        // Start observing the documentElement for attribute changes
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['lang'],
        });

        // Cleanup observer on component unmount
        return () => {
            observer.disconnect();
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    // Determine which text to display based on the current language
    // Assuming metadata object keys are like "title_he", "title_ru", etc.
    
    const findTextForCurrentLang = (): string => {
        for (const key in metadataObj) {
            if (key.endsWith(`_${lang}`)) {
                return metadataObj[key];
            }
        }
        return title; // Fallback to the title if no matching key is found
    };

    const text = findTextForCurrentLang();

    return <>{text}</>;
};

export default TextConvertor;
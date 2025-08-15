'use client';

import { useState, useEffect } from 'react';
import { parseHTML } from '@kontent-ai/rich-text-resolver';

interface HtmlToPortableTextProps {
  htmlContent: string;
  className?: string;
  onConvert?: (portableText: any) => void;
}

export default function HtmlToPortableText({ 
  htmlContent, 
  className = '', 
  onConvert 
}: HtmlToPortableTextProps) {
  const [portableText, setPortableText] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const convertHtmlToPortableText = async () => {
      if (!htmlContent) {
        setPortableText(null);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Convert HTML to portable text
        const result = parseHTML(htmlContent);

        console.log('Converted portable text:', result);
        
        setPortableText(result);
        
        // Call the optional callback
        if (onConvert) {
          onConvert(result);
        }
      } catch (err: any) {
        console.error('Error converting HTML to portable text:', err);
        setError(err.message || 'Failed to convert HTML to portable text');
      } finally {
        setLoading(false);
      }
    };

    convertHtmlToPortableText();
  }, [htmlContent, onConvert]);

  if (loading) {
    return (
      <div className={`${className} text-gray-500`}>
        Converting HTML to portable text...
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} text-red-600`}>
        Error: {error}
      </div>
    );
  }

  if (!portableText) {
    return null;
  }

  return (
    <div className={className}>
      {/* Display the portable text structure */}
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
        {JSON.stringify(portableText, null, 2)}
      </pre>
    </div>
  );
}

// Utility function to convert HTML to portable text (can be used outside the component)
export async function convertHtmlToPortableText(htmlContent: string) {
  try {
    const result = parseHTML(htmlContent);
    return { success: true, data: result };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.message || 'Failed to convert HTML to portable text' 
    };
  }
}

// Hook for using the converter
export function useHtmlToPortableText(htmlContent: string) {
  const [portableText, setPortableText] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const convert = async () => {
      if (!htmlContent) {
        setPortableText(null);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const result = await convertHtmlToPortableText(htmlContent);
        
        if (result.success) {
          setPortableText(result.data);
        } else {
          setError(result.error);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to convert HTML to portable text');
      } finally {
        setLoading(false);
      }
    };

    convert();
  }, [htmlContent]);

  return { portableText, loading, error };
}

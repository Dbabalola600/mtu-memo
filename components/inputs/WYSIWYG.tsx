import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

interface EditorProps {
    title: string
    value: string;
    onChange: (content: any) => void;
}

const DynamicReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
});

const WYSIWYG: React.FC<EditorProps> = ({ value, onChange,title }) => {
    const handleChange = (content: any) => {
        onChange(content);
    };

    return (
        <div
            className='500px'
        >

            <label>
                <span className="label-text text-black text-3xl mb-">{title}</span>

            </label>
            <DynamicReactQuill
                value={value}
                onChange={handleChange}
                className='h-[500px]'
                theme="snow"
                modules={{
                    toolbar: [
                        [{ font: [] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link', 'image'],
                        ['clean'],
                        ['code-block'],
                        [{ align: [] }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ color: [] }, { background: [] }],
                  
                        ['blockquote', 'code-block'],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ underline: 'always' }, { underline: 'never' }],
                        [{ strikethrough: true }]
                       
                  
                    ],
                }}
            />
        </div>

    );
};

export default WYSIWYG;

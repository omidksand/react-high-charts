import '@/assets/css/main.css';
import '@/assets/css/app.css';

export default function ({ children, ...props }: any) {
	return (
		<div className='flex flexCol w100 h100' {...props}>
			{children}
		</div>
	)
}

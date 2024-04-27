import {cn} from '@/lib/utils/mergeCss'

function BrandLogo({children, className}) {
	return (
		<svg className={cn('w-4 h-4', className)} viewBox="0 0 512 512">
			<path d="M256.3 27.7c49.7.6 94.9 15.2 135.3 44.3 13.5 9.7 18.7 28.3 12.5 44.2-6.2 16-22.8 26-39.6 24.1-7.5-.8-14.1-3.6-20.2-7.9-22.4-16.1-47.2-25.1-74.7-27.8-61.2-6-121.2 26-149.4 81.8-28.3 55.8-19.3 122.5 25.1 169.1 24.8 26.1 55.4 41.1 91 46.3 6.3.9 13 1.6 18.8 4.2 17.4 7.9 25.3 25.7 20.6 44.4-4.1 16.3-20.4 28.4-38.2 27.6-23.9-1.2-47-6.8-69-16.1-67-28.5-112.6-77.1-132.5-147.3-20.4-72.2-6.8-139.1 39-198.8 31.3-40.8 72.6-67 122.2-80.3 19.3-5.4 39-7.9 59.1-7.8z"></path>
			<path d="M255.5 345.1c-52.8.1-94.5-42.9-92.9-94 1.7-52.3 44.7-91.4 96.7-89.5 49.2 1.7 90.5 42.2 89.3 93.6-1.3 53.5-45.9 90.5-93.1 89.9zM466 175.4c0 20.3-17.1 37.2-37.7 37.3-20.6.1-38.2-17-38.1-37.4.1-21.9 18.7-38.1 38.8-37.6 20.5.5 37 16.9 37 37.7zm-166.9 250c-1.2-19.6 16.5-37.6 37.4-37.6 21 0 37.8 16.3 38.2 37.2.3 20.4-17 37.6-37.8 37.7-21.1 0-37.7-16.3-37.8-37.3zm150.1-63.1c-.2 21.7-16.6 37.6-38.7 37.4-20.4-.2-36.8-17-36.6-37.5.2-21.1 17-37.6 38.3-37.4 20.8.2 37.2 16.8 37 37.5zm-42.3-91.5c-.1-20.7 16.3-37.1 37.3-37.2 21.5-.1 37.9 15.8 38 37 .2 20.9-16.5 37.8-37.6 37.7-23.3-.1-38.8-19.6-37.7-37.5z"></path>
		</svg>
	)
}

export default BrandLogo
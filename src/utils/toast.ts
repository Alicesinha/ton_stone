'use client'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function SuccessToast(message: string) {
	toast.success(message, {
		position: 'top-center',
		autoClose: 5000,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
	})
}
export function WarningToast(message: string) {
	toast.warn(message, {
		position: 'top-center',
		autoClose: 5000,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
	})
}
export function ErrorToast(message: string) {
	toast.error(message, {
		position: 'top-center',
		autoClose: 5000,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
	})
}

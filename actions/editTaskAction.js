'use server'
import {revalidatePath} from 'next/cache'

import {ref, set, push} from 'firebase/database'

import {db} from '@/lib/firebase/firebaseInit'
// formData  = formData object name/value pairs from the form
export async function editAction(prevState, formData) {
	const task = formData.get('task')
	const category = formData.get('category')
	const uid = formData.get('uid')
	const newObj = {
		task,
		category,
	}
	 //call edit task
    
	const response = await editTask(newObj,uid)
	revalidatePath ('/demo')
	return {message: response}
}

	async function editTask(task) {
		//const rootPath = ref(db)

	//	const key = push(rootPath).key
		const path = 'todos/${key}'
		const dbRef = (db,path)

		try {
			await update(dbRef, task)
			return 'success'
		} catch(error) {
			return 'failure'
		}
		
	}

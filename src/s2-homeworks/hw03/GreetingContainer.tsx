import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (value:string)=> void  // need to fix any
}

export const pureAddUser = (name: string, setError: (value: string)=>void, setName: (value: string)=>void, addUserCallback: (val: string)=>void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
   if(name.trim()){
    addUserCallback(name)
    setName('')
   } else{
    setError('Ошибка! Введите имя!')
   }
}

export const pureOnBlur = (name: string, setError: (value: string)=> void) => { 
    name.trim()?  setError('') : setError('Ошибка! Введите имя!')
    
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => {
    if (e.key === 'Enter'){
        addUser()
    }
    
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {


    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);
        // lastUserName = name;

        // console.log('Это мой тест', lastUserName)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        name.trim() ? pureOnEnter(e, addUser) : setError('Ошибка! Введите имя!')
    }

    const totalUsers = users.length // need to fix
    let lastUserName = users.length ? users[users.length-1].name : '' 

    //users[users.length - 1].name// //' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

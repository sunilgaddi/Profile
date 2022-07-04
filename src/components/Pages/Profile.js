import { useState, useEffect, useMemo, useReducer } from 'react'
import Skeleton from '../../utils/AllSkeletons'
import backArrow from '../../asserts/icons/back-arrow.png'
import avatar from '../../asserts/avatars/avatar9.png'
import banner from '../../asserts/banner/banner.jpg'
import location from '../../asserts/icons/location.png'
import user from '../../asserts/icons/add-user.png'
import edit from '../../asserts/icons/edit.png'
import mail from '../../asserts/icons/mail.png'
import phone from '../../asserts/icons/phone.png'
import suitcase from '../../asserts/icons/suitcase.png'
import birthday from '../../asserts/icons/birthday-cake.png'

import '../css/Profile.css'

const initialState = {
    disable: true,
    update: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Toggle': return { ...state, disable: !state.disable, update: !state.update }
        default: return state
    }
}

function Profile() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [isLoading, setIsLoading] = useState(true)
    const [details, setDetails] = useState(null)
    const [worktype, setWorktype] = useState("")

    const data = useMemo(() => {
        const userDetails = {
            avatar: avatar,
            banner: banner,
            name: 'sunil',
            company: 'coder space',
            designation: 'senior developer',
            location: 'london, usa',
            email: 'sunilgaddi917@gmail.com',
            phonenumber: 9177183341,
            dob: '25 05 1998',
            worktype: ['remote', 'parttime', 'freelance']
        }
        return userDetails
    }, [])

    const allExp = [
        { company: "trendyol.com", workType: "fulltime", position: "front-end developer", duration: { start: "oct 2021", end: "dec 2022" } },
        { company: "tiklaGelsin", workType: "contract", position: "front-end developer", duration: { start: "oct 2021", end: "dec 2022" } },
        { company: "Pazarama", workType: "internship", position: "front-end developer", duration: { start: "oct 2021", end: "dec 2022" } }
    ]

    const allEdu = [
        { college: "Bhavans Vivekananda Degree College", department: "Bachelor's of Computer Application", yoc: "June 2019", location: 'India' },
        { college: "A.V PG College", department: "Master's of Computer Application", yoc: "July 2022", location: 'India' }
    ]

    useEffect(() => {
        setTimeout(() => {
            setDetails(data)
            setIsLoading(false)
        }, 3000)
    }, [data])

    const skltn = {
        txt__sml: 'skeleton__text__small',
        txt__mid: 'skeleton__text__medium',
        btn: 'skeleton__btn',
        heading: 'skeleton__heading',
        icn: 'skeleton__icon',
        img__sml: 'skeleton__img__sml'
    }


    useEffect(() => {
        const destruct = () => {
            let destructedData = "";
            let length = details?.worktype.length - 1
            details?.worktype?.map((item, id) => {
                if (length > id) {
                    return destructedData = destructedData.concat(item + ", ")
                }
                else if (length === id) {
                    return destructedData = destructedData.concat(item + ".")
                }
                else {
                    return destructedData
                }
            })
            setWorktype(destructedData)
        }
        destruct()
    }, [details])

    return (
        <section id='profile__section' >

            <div className='navigate__back__section'>
                <span className='navigate__back__wrapper'>
                    <img className='backarrow__img' src={backArrow} alt='back-arrow' />
                    <span className='navigate__to__text'>Back to Home</span>
                </span>
            </div>

            <div className='bnp__section'>

                <div className={isLoading ? 'banner__section skeleton__animation' : 'banner__section'} style={{ backgroundImage: `url(${details?.banner})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>

                <div className='profile__section'></div>

                <div className='profile__img__section'>
                    {
                        isLoading ? <img className='skeleton__img skeleton__animation' alt='' /> : <img className='profile__img' src={details?.avatar} alt='' />
                    }
                </div>

                <div className='name-loc__section'>
                    {
                        isLoading ?
                            <>
                                <Skeleton skltn={skltn.txt__mid} />
                                <Skeleton skltn={skltn.txt__mid} />
                                <Skeleton skltn={skltn.txt__mid} />
                            </>
                            :
                            <>
                                <span className='name'>{details?.name}</span>
                                <span className='comp__post flex-row'><span className='company'>{details?.company}</span><span className='dot flex-row'></span><span className='position'>{details?.designation}</span></span>
                                <span className='loc__icon__wrapper'><img className='loc__icon' src={location} alt='loc' /><span className='loc'>{details?.location}</span></span>
                            </>
                    }
                </div>

                <div className='btns'>
                    {
                        isLoading ?
                            <>
                                <Skeleton skltn={skltn.btn} />
                                <Skeleton skltn={skltn.btn} />
                            </>
                            :
                            <>
                                <button className='add__btn'><img className='user' src={user} alt='user' />Add Friend</button>
                                <button className='spr__btn'>Send Project Request</button>
                            </>
                    }
                </div>

            </div>
            <div className='short__desc__section'>
                <div className='short__desc__title flex-row'>{isLoading ?
                    <>
                        <Skeleton skltn={skltn.heading} />
                        <Skeleton skltn={skltn.txt__sml} />
                    </>
                    :
                    <>
                        <span className='title'>Short Description</span>
                        <div className='editimg__wrapper'><img className='editimg' onClick={() => dispatch({ type: 'Toggle' })} src={edit} alt='edit' /></div>
                    </>
                }
                </div>
                <div className='short__desc__wrapper flex-col'>

                    {isLoading ?
                        <>
                            <Skeleton skltn={skltn.txt__sml} skltn__len={'skeleton__fulllen'} />
                            <Skeleton skltn={skltn.txt__sml} skltn__len={'skeleton__fulllen'} />
                            <Skeleton skltn={skltn.txt__sml} skltn__len={'skeleton__fulllen'} />
                            <Skeleton skltn={skltn.txt__sml} />
                        </>

                        :
                        <span className='short__desc'>
                            Award-winning web developer and instructor with 10+ years’ of well-rounded experience in LAMP development, object-oriented and user-centered design, seeks a position with a top technology firm.
                        </span>
                    }
                </div>
            </div>
            <div className='all__info__section'>

                <div className='all__info__title flex-row'>{isLoading ?
                    <>
                        <Skeleton skltn={skltn.heading} />
                        <Skeleton skltn={skltn.txt__sml} />
                    </>
                    :
                    <>
                        <span className='title'>All Personal Information</span>
                        <div className='editimg__wrapper'><img className='editimg' onClick={() => dispatch({ type: 'Toggle' })} src={edit} alt='edit' /></div>
                    </>
                }
                </div>

                <div className='all__info__wrapper__one'>
                    <div className='all__info__left__wrapper'>
                        <div className='info__lists__wrapper flex-row'><div className='icon'> {isLoading ? <Skeleton skltn={skltn.icn} /> : <img className='mail__icon' src={mail} alt='mail' />}</div><div className='flex-col info__lists'>{isLoading ? <><Skeleton skltn={skltn.txt__mid} /><Skeleton skltn={skltn.txt__sml} /></> : <><input className={`info__text1 ${state.update && 'update__personal'}`} type='text' defaultValue={details?.email} disabled={state.disable} /><span className='info__text2'>Mail</span></>}</div></div>
                        <div className='info__lists__wrapper flex-row'><div className='icon'> {isLoading ? <Skeleton skltn={skltn.icn} /> : <img className='phone__icon' src={phone} alt='phone' />}</div><div className='flex-col info__lists'>{isLoading ? <><Skeleton skltn={skltn.txt__mid} /><Skeleton skltn={skltn.txt__sml} /></> : <><input className={`info__text1 ${state.update && 'update__personal'}`} type='text' defaultValue={details?.phonenumber} disabled={state.disable} /><span className='info__text2'>Phone Number</span></>}</div></div>
                    </div>
                    <div className='all__info__right__wrapper'>
                        <div className='info__lists__wrapper flex-row'><div className='icon'>{isLoading ? <Skeleton skltn={skltn.icn} /> : <img className='birthday__icon' src={birthday} alt='mail' />}</div><div className='flex-col info__lists'>{isLoading ? <><Skeleton skltn={skltn.txt__mid} /><Skeleton skltn={skltn.txt__sml} /></> : <><input className={`info__text1 ${state.update && 'update__personal'}`} type='text' defaultValue={details?.dob} disabled={state.disable} /><span className='info__text2'>DOB</span></>}</div></div>
                        <div className='info__lists__wrapper flex-row'><div className='icon'>{isLoading ? <Skeleton skltn={skltn.icn} /> : ""}</div><div className='flex-col info__lists'>{isLoading ? <><Skeleton skltn={skltn.txt__mid} /><Skeleton skltn={skltn.txt__sml} /></> : ""}</div></div>
                    </div>
                </div>

                <div className='all__info__wrapper__two'>
                    <div className='info__lists__wrapper flex-row'><div className='icon'>{isLoading ? <Skeleton skltn={skltn.icn} /> : <img className='suitcase__icon' src={suitcase} alt='suitcase' />}</div><div className='flex-col info__lists'>{isLoading ? <><Skeleton skltn={skltn.txt__mid} /><Skeleton skltn={skltn.txt__sml} /></> : <><input className={`info__text1 ${state.update && 'update__personal'}`} type='text' defaultValue={worktype} disabled={state.disable} /><span className='info__text2'>Work Type</span></>}</div></div>
                </div>


            </div>

            <div className='all__experiences__section'>

                <div className='all__experiences__title flex-row'>{isLoading ? <><Skeleton skltn={skltn.heading} /> <Skeleton skltn={skltn.txt__sml} /></> : <><span className='title'>All Experiences</span><div className='editimg__wrapper'><img className='editimg' onClick={() => dispatch({ type: 'Toggle' })} src={edit} alt='edit' /></div></>}</div>

                <div className='all__experiences__wrapper'>
                    {isLoading ?
                        <>
                            <div className='experiences__list__wrapper'>
                                <div className='experiences__lists__wrapper flex-row'><div className='icon'><Skeleton skltn={skltn.img__sml} /></div><div className='flex-col experiences__lists'><Skeleton skltn={skltn.txt__mid} /><Skeleton skltn={skltn.txt__sml} /></div></div>
                            </div>
                            <div className='experiences__list__wrapper'>
                                <div className='experiences__lists__wrapper flex-row'><div className='icon'><Skeleton skltn={skltn.img__sml} /></div><div className='flex-col experiences__lists'><Skeleton skltn={skltn.txt__mid} /><Skeleton skltn={skltn.txt__sml} /></div></div>
                            </div>
                            <div className='experiences__list__wrapper'>
                                <div className='experiences__lists__wrapper flex-row'><div className='icon'><Skeleton skltn={skltn.img__sml} /></div><div className='flex-col experiences__lists'><Skeleton skltn={skltn.txt__mid} /><Skeleton skltn={skltn.txt__sml} /></div></div>
                            </div>
                        </>
                        :
                        allExp.map((item, id) => {
                            return <div key={id} className='experiences__list__wrapper'>
                                <div className='experiences__lists__wrapper flex-row'><div className='icon'><img className='company__icon' src={avatar} alt='' /></div>
                                    <div className='flex-col experiences__lists'>
                                        <div className='exp__upper__fields flex-row'>
                                            <input className='experience__inputs company__input' disabled type='text' defaultValue={item.company} />
                                            <input className='experience__inputs worktype__input' disabled type='text' defaultValue={item.workType} />
                                        </div>
                                        <div className='exp__lower__fields flex-row'>
                                            <input className='experience__inputs position__input' disabled type='text' defaultValue={item.position} />
                                            <input className='experience__inputs totalexp__input' disabled type='text' defaultValue={'1 Year 2 Months'} />
                                            <input className='experience__inputs start__input' disabled type='text' defaultValue={item.duration.start} />
                                            <input className='experience__inputs end__input' disabled type='text' defaultValue={item.duration.end} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>

            <div className='all__education__section'>

                <div className='all__education__title flex-row'>{isLoading ? <><Skeleton skltn={skltn.heading} /> <Skeleton skltn={skltn.txt__sml} /></> : <><span className='title'>Education</span><div className='editimg__wrapper'><img className='editimg' onClick={() => dispatch({ type: 'Toggle' })} src={edit} alt='edit' /></div></>}</div>

                <div className='all__education__wrapper'>
                    {isLoading ?
                        <>
                            <div className='education__list__wrapper'>
                                <div className='education__lists__wrapper flex-row'>
                                    <div className='icon'><Skeleton skltn={skltn.img__sml} /></div>
                                    <div className='flex-col education__lists'><Skeleton skltn={skltn.txt__mid} /><Skeleton skltn={skltn.txt__sml} /></div>
                                </div>
                            </div>
                            <div className='education__list__wrapper'>
                                <div className='education__lists__wrapper flex-row'>
                                    <div className='icon'><Skeleton skltn={skltn.img__sml} /></div>
                                    <div className='flex-col education__lists'><Skeleton skltn={skltn.txt__mid} /><Skeleton skltn={skltn.txt__sml} /></div>
                                </div>
                            </div>
                        </>
                        :
                        allEdu.map((item, id) => {
                            return <div key={id} className='education__list__wrapper'>
                                <div className='education__lists__wrapper flex-row'>
                                    <div className='icon'><img className='college__icon' src={avatar} alt='' /></div>
                                    <div className='flex-col education__lists'>
                                        <input className='education__inputs college__input' disabled type='text' defaultValue={item.college} />
                                        <input className='education__inputs department__input' disabled type='text' defaultValue={item.department} />
                                        <div className='clg__yoc__loc__wrapper flex-row'>
                                            <input type='text' className=' education__inputs yoc__input' disabled defaultValue={item.yoc} />
                                            <input type='text' className='education__inputs loc__input' disabled defaultValue={item.location} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>

            <div className='all__skills__section'>
                <div className='all__skills__title flex-row'>{isLoading ? <><Skeleton skltn={skltn.heading} /> <Skeleton skltn={skltn.txt__sml} /></> : <><span className='title'>Skills</span><div className='editimg__wrapper'><img className='editimg' onClick={() => dispatch({ type: 'Toggle' })} src={edit} alt='edit' /></div></>}
                </div>
                <div className='all__skills__wrapper flex-row'>{isLoading ? 
                    <Skeleton skltn={skltn.txt__mid} /> :
                    <>
                        <span className='skills__list'>React Js</span>
                        <span className='skills__list'>Node Js</span>
                        <span className='skills__list'>Express Js</span>
                        <span className='skills__list'>MongoDB</span>
                    </>}
                </div>
            </div>

            <div className='all__languages__section'>
                <div className='all__languages__title flex-row'>{isLoading ? <><Skeleton skltn={skltn.heading} /> <Skeleton skltn={skltn.txt__sml} /></> : <><span className='title'>Languages</span><div className='editimg__wrapper'><img className='editimg' onClick={() => dispatch({ type: 'Toggle' })} src={edit} alt='edit' /></div></>}
                </div>
                <div className='all__languages__wrapper flex-row'>{isLoading ? 
                    <Skeleton skltn={skltn.txt__mid} /> :
                    <>
                        <span className='lang__lists flex-col'><span className='lang'>English</span><span className='lang__lvl'>Advance</span></span>
                        <span className='lang__lists flex-col'><span className='lang'>Telugu</span><span className='lang__lvl'>Native</span></span>
                        <span className='lang__lists flex-col'><span className='lang'>Hindi</span><span className='lang__lvl'>Intermediate</span></span>
                    </>}
                </div>
            </div>


        </section>
    )
}

export default Profile
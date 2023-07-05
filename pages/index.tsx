import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DefaultLayout from '../components/Layouts/DefaultLayout'
import TextInput from '../components/inputs/TextInput'
import Link from 'next/link'
import Header from '../components/shared/Header'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <>

        <div>
          <Header
            title="LOGIN"
            desc="please provide necessary details for sign in"
          />

          <form
            className="w-full py-20 space-y-12  text-black text-base md:text-xl"
          // onSubmit={
          //   login
          // }
          >
            {/* {showtoast2.show && <ErrMess title="Invalid user" />}

              {showtoast.show && <ErrMess title="Invalid password" />}
              {showgoodtoast.show && <GoodMess title="login successful" />} */}

            <div className="mx-auto  w-full ">
              <TextInput
                placeholder="User Name"
                name="User Name"
                type='text'

              />
            </div>


            <div className="mx-auto w-full ">
              <TextInput
                placeholder="Password"
                name="Password"
                type='password'
              />
            </div>




            <div className=" w-full  space-y-6">

              <button className="w-full btn-primary btn "
                type="submit">
                {/* {isLoading ? "Loading..." : "SIGN IN"} */}
                Sign In
              </button>

              {/* <h6 className="text-center md:text-xl w-full">
                  New Student?{" "}
                  <span className=" hover:underline">
                    <Link href="student/CreateAccount">Create a New Student Account</Link>
                  </span>
                </h6> */}
            </div>




          </form>


        </div>



      </>
    </DefaultLayout>
  )
}

export default Home

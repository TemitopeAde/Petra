import React from 'react'
import { useForm } from "react-hook-form"
import { useMutation } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import GoogleMapReact from 'google-map-react';
import 'react-toastify/dist/ReactToastify.css';


import logo from '../img/Logo/Logo 1/PNG.png'
import logo2 from '../img/Logo/Logo 2/logo2.png'

const HomeContent = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const defaultProps = {
    center: {
      lat: 41.378980,
      lng: -81.449680
    },
    zoom: 11
  };

  // Define your mutation function
  const sendFormToEndpoint = async (formData) => {
    // Make the API request to send the form data
    try {
      const response = await fetch('http://localhost:5100/api/v1/jobs/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to send the form data');
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to send the form data');
    }
  };

  // Use the useMutation hook
  const mutation = useMutation(sendFormToEndpoint, {
    onError: (error) => {
      // Handle errors here
      const notify = () => toast("Form not submitted, try again");
      notify()
    },
    onSuccess: (data) => {
      // Handle successful response
      reset();
      const notify = () => toast("Form submitted successfully");
      notify()
      console.log('Form submitted successfully', data);
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    mutation.mutate(data); 
  };

  return (
    <>
      <ToastContainer />
      <section class="herosection">
        {/* <div class="container">
          <h1>Petra Power</h1>
          <p>Vivamus nisl turpis, ultrices at fermentum eget, interdum ac urna. Proin at turpis mauris. Interdum et
            malesuada fames
            ac ante ipsum primis in faucibus.</p>
        </div> */}
      </section>

      <section class="home-content">

        <div class="home-content__one">
          <div>
            <img src={logo} alt="petra" />
            <p class="home-content__one__text">Petra Power is a precision manufacturer of solid oxide fuel cell power systems.
              Our mission is to seamlessly
              bridge the
              world’s conversion from fossil fuels to clean fuels such as hydrogen with technology that lowers our customers’
              fuel
              costs and carbon emissions. This is accomplished by leveraging the power and versatility of Petra Power’s novel
              solid
              oxide fuel cells to efficiently convert fossil fuel to electricity in a product that can also convert hydrogen
              and other
              clean fuels to electricity. This will enable immediate reduction of carbon emissions and lower the barriers for
              hydrogen
              adoption and a true zero-carbon future. We are growing rapidly and always looking for innovative, hard-working,
              and
              mission-driven individuals to join the team. Apply below!</p>
          </div>
          
        </div>

        <section class="home-content__two container">
          

          <img style={{ margin: "2rem 0", width: "282px"}} src={logo2} alt="petra power" />

          <div class="home-content__jobs">
            <div>
              <h3>Senior Researcher</h3>
              <p>Petra Power is seeking creative researchers and problem solvers for the role of Senior Researcher. Lead
                your own team
                and help solve some of the most difficult problems in material science, chemistry, thermodynamics,
                engineering, and/or
                systems integration to help realize a cleaner, brighter energy future.
              </p>
              <button class="btn-no-outline">Apply now</button>
            </div>
            <div>
              <h3>Laboratory Technician</h3>
              <p>Petra Power is hiring motivated laboratory workers to process chemicals, carry out experiments, build and
                test power
                systems, and help the Company grow. This position offers an opportunity for undergraduates in STEM and
                experienced
                candidates with backgrounds in manufacturing or chemical processes to work under some of the brightest minds
                in the
                field helping to build truly transformational technology.
              </p>
              <button class="btn-no-outline">Apply now</button>
            </div>
            <div>
              <h3>Other Positions</h3>
              <p>Do you think you can help Petra Power, but don’t fit into either of the open job positions? Apply today and
                include a
                cover letter explaining your desired position. We are always looking for exceptional candidates in any field
                to join our
                team.
              </p>
              <button class="btn-no-outline">Apply now</button>
            </div>
          </div>
        </section>


        <section class="home-content_three">
          <div>
            <h3>The work done at Petra Power is fast-paced, ever-evolving and highly interdisciplinary. The job descriptions
              listed
              above and within each application link are meant to provide a broad overview of the position and job
              requirements. Petra
              Power will consider any candidate who feels they may be a benefit to the Organization for employment. All
              full-time
              positions include company stock options, health, vision, and dental benefits, relocation assistance where
              appropriate,
              holiday, and PTO.
            </h3>
            <p>All qualified applicants will receive consideration for employment without regard to race, skin color,
              religion, sex,
              sexual orientation, gender identity, disability, veteran status, or any other protected category
            </p>
          </div>
        </section>



        <section className="section home-content__four">
          <div className='home-content__four__flex container'>
            <section className='home-content__four-maps'>
              <h2>More info</h2>
              <p>Have a question? We are here to help. Send us a message and we’ll be in touch.</p>
              <div style={{ height: '100%', width: '100%'}} className='maps'>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                </GoogleMapReact>
              </div>
            </section>
            <section className='home-content__four-contact-us'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='contact-form-flex'>
                  <div className='firstLast'>
                    <div>
                      <input type="text" placeholder='First name' {...register("firstName", {
                        required: true,
                        minLength: 2
                      })} />
                      {errors.firstName && <p>This field is required</p>}
                    </div>

                    <div>
                      <input type="text" placeholder='Last name' {...register("lastName", {
                        required: true,
                        minLength: 2
                      })} />
                      {errors.lastName && <p>This field is required</p>}
                    </div>
                  </div>
                  <div>
                    <input type="email" placeholder='Your email' {...register("email", {
                      required: true,
                      
                    })} />
                    {errors.email && <p>This field is required</p>}
                  </div>
                  <div>
                    <input type="number" placeholder='Your phone' {...register("phone", {
                      required: true,
              
                    })} />
                    {errors.phone && <p>This field is required</p>}
                  </div>
                  <div>
                    <textarea placeholder='Your message' cols="30" rows="10" {...register("message", {
                      required: true,
                      
                    })}></textarea>
                    {errors.message && <p>This field is required</p>}
                  </div>
                </div>

                <button type="submit" disabled={mutation.isLoading}>
                  {mutation.isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </form>

            </section>
          </div>
        </section>
      </section>

    </>
  )
}

export default HomeContent
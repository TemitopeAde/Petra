import React from 'react'
import { useForm } from "react-hook-form"

import "../components/components.css";

const JobContainer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='job__container'>
      <div className='container'>
        <h2 className='job__title'>Senior Researcher</h2>
        <p className='job__description'>Petra Power is seeking an accomplished, ambitious, and creative R&D
          researcher to lead a small team in development and
          improvement of solid oxide fuel cells and
          solid oxide fuel cell (SOFC) power systems for
          the Company. This position will work closely
          with the Company’s CTO and other Senior level
          researchers to develop and help build one of the
          world’s first affordable, reliable, and efficient
          commercial SOFC systems. An ideal candidate for
          this role has PhD-level research experience and
          has some experience working on end-to-end SOFC
          development in an industry setting. Different
          qualifications can be considered for this position as well.
          Candidates should have extensive materials and ceramics
          experience, experience working in a cleanroom,
          experience with tape casting and high-temperature
          furnace usage and a mastery of wet chemistry for
          ceramic materials. Candidates should also be
          comfortable operating electron microscopes.
          As an employee in a small startup, a willingness
          to learn new skills, take on unexpected challenges,
          and be flexible with hours and responsibilities are
          highly valued. The following
          is an example of some job responsibilities associated with this role:
        </p>
        <ul className="job__responsibilities">
          <li>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12C2.68629 12 0 9.31368 0 6C0 2.68629 2.68629 0 6 0C9.31368 0 12 2.68629 12 6C12 9.31368 9.31368 12 6 12ZM6 10.8C8.65098 10.8 10.8 8.65098 10.8 6C10.8 3.34903 8.65098 1.2 6 1.2C3.34903 1.2 1.2 3.34903 1.2 6C1.2 8.65098 3.34903 10.8 6 10.8ZM6 7.8C5.00586 7.8 4.2 6.99414 4.2 6C4.2 5.00586 5.00586 4.2 6 4.2C6.99414 4.2 7.8 5.00586 7.8 6C7.8 6.99414 6.99414 7.8 6 7.8Z" fill="#3DAB35" />
            </svg>
            <span>Developing and executing research plans</span>
          </li>
          <li>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12C2.68629 12 0 9.31368 0 6C0 2.68629 2.68629 0 6 0C9.31368 0 12 2.68629 12 6C12 9.31368 9.31368 12 6 12ZM6 10.8C8.65098 10.8 10.8 8.65098 10.8 6C10.8 3.34903 8.65098 1.2 6 1.2C3.34903 1.2 1.2 3.34903 1.2 6C1.2 8.65098 3.34903 10.8 6 10.8ZM6 7.8C5.00586 7.8 4.2 6.99414 4.2 6C4.2 5.00586 5.00586 4.2 6 4.2C6.99414 4.2 7.8 5.00586 7.8 6C7.8 6.99414 6.99414 7.8 6 7.8Z" fill="#3DAB35" />
            </svg>
            <span>Developing and executing research plans</span>
          </li>
          <li>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12C2.68629 12 0 9.31368 0 6C0 2.68629 2.68629 0 6 0C9.31368 0 12 2.68629 12 6C12 9.31368 9.31368 12 6 12ZM6 10.8C8.65098 10.8 10.8 8.65098 10.8 6C10.8 3.34903 8.65098 1.2 6 1.2C3.34903 1.2 1.2 3.34903 1.2 6C1.2 8.65098 3.34903 10.8 6 10.8ZM6 7.8C5.00586 7.8 4.2 6.99414 4.2 6C4.2 5.00586 5.00586 4.2 6 4.2C6.99414 4.2 7.8 5.00586 7.8 6C7.8 6.99414 6.99414 7.8 6 7.8Z" fill="#3DAB35" />
            </svg>
            <span>Developing and executing research plans</span>
          </li>
          <li>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12C2.68629 12 0 9.31368 0 6C0 2.68629 2.68629 0 6 0C9.31368 0 12 2.68629 12 6C12 9.31368 9.31368 12 6 12ZM6 10.8C8.65098 10.8 10.8 8.65098 10.8 6C10.8 3.34903 8.65098 1.2 6 1.2C3.34903 1.2 1.2 3.34903 1.2 6C1.2 8.65098 3.34903 10.8 6 10.8ZM6 7.8C5.00586 7.8 4.2 6.99414 4.2 6C4.2 5.00586 5.00586 4.2 6 4.2C6.99414 4.2 7.8 5.00586 7.8 6C7.8 6.99414 6.99414 7.8 6 7.8Z" fill="#3DAB35" />
            </svg>
            <span>Developing and executing research plans</span>
          </li>
          <li>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12C2.68629 12 0 9.31368 0 6C0 2.68629 2.68629 0 6 0C9.31368 0 12 2.68629 12 6C12 9.31368 9.31368 12 6 12ZM6 10.8C8.65098 10.8 10.8 8.65098 10.8 6C10.8 3.34903 8.65098 1.2 6 1.2C3.34903 1.2 1.2 3.34903 1.2 6C1.2 8.65098 3.34903 10.8 6 10.8ZM6 7.8C5.00586 7.8 4.2 6.99414 4.2 6C4.2 5.00586 5.00586 4.2 6 4.2C6.99414 4.2 7.8 5.00586 7.8 6C7.8 6.99414 6.99414 7.8 6 7.8Z" fill="#3DAB35" />
            </svg>
            <span>Developing and executing research plans</span>
          </li>
          <li>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12C2.68629 12 0 9.31368 0 6C0 2.68629 2.68629 0 6 0C9.31368 0 12 2.68629 12 6C12 9.31368 9.31368 12 6 12ZM6 10.8C8.65098 10.8 10.8 8.65098 10.8 6C10.8 3.34903 8.65098 1.2 6 1.2C3.34903 1.2 1.2 3.34903 1.2 6C1.2 8.65098 3.34903 10.8 6 10.8ZM6 7.8C5.00586 7.8 4.2 6.99414 4.2 6C4.2 5.00586 5.00586 4.2 6 4.2C6.99414 4.2 7.8 5.00586 7.8 6C7.8 6.99414 6.99414 7.8 6 7.8Z" fill="#3DAB35" />
            </svg>
            <span>Developing and executing research plans</span>
          </li>
        </ul>
        <p className="intent__job">If you are interested in this position please submit your
          name, email and phone number below along with an up-to-date
          resume to be considered. If there is additional information
          that the Petra Power team should consider, please include
          it in a cover letter. If you believe you would be better
          suited for the laboratory technician (link to the lab tech job page)
          or another (link to the “other” job page) position, please apply by
          clicking the links in-text or on our home page. If you would like
          to learn more about the Company or open positions please submit a
          resume or use our contact form on the
          homepage and someone from our team will reach out to you shortly.
        </p>
      </div>

      <div className="upload__resume container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='upload__resume-flex'>
            <div className='upload__flex'>
              <div>
                <input type="text" placeholder='Name' {...register("name", {
                  required: true,
                  minLength: 2
                })} />
                {errors.name && <p>This field is required</p>}
              </div>
              <div>
                <input type="email" placeholder='Your Email'  {...register("email", {
                  required: true,

                })} />
                {errors.email && <p>This field is required</p>}
              </div>
              <div>
                <input type="number" placeholder='Your Phone' {...register("phone", {
                  required: true,
                  minLength: 2
                })} />
                {errors.phone && <p>This field is required</p>}
              </div>
              <div>
                <input type="file" id="resume" {...register("resume", {
                  required: true,
                  validate: {
                    acceptedFormats: (value) => {
                      if (value) {
                        const allowedFormats = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
                        return allowedFormats.includes(value[0].type);
                      }
                      return true;
                    },
                  },
                })}
                  accept=".pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
                {errors.phone && <p>Upload your file</p>}
              </div>
              <button type="submit">Submit</button>
            </div>
            <div className='resume__class'>
              <label htmlFor="resume">


                <span>
                  <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.1875 51.75V16.6031L18.975 27.8156L12.9375 21.5625L34.5 0L56.0625 21.5625L50.025 27.8156L38.8125 16.6031V51.75H30.1875ZM8.62501 69C6.25313 69 4.22194 68.1547 2.53144 66.4642C0.840944 64.7737 -0.00286768 62.744 7.32173e-06 60.375V47.4375H8.62501V60.375H60.375V47.4375H69V60.375C69 62.7469 68.1548 64.7781 66.4643 66.4686C64.7738 68.1591 62.744 69.0029 60.375 69H8.62501Z" fill="#3DAB35" />
                  </svg>
                </span>
                <h3>Upload Resume</h3>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices</p>
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className="others">
        <div>
          <p>The above statements are meant to describe only the broad
            nature and level of work. Job responsibilities include above
            are a non-exhaustive list and may contain elements that are
            irrelevant to the true
            nature of work for this position. Other duties,
            responsibilities, and roles may be added and this
            description may be amended at any time.
            Petra Power is an equal-opportunity employer.
            All qualified applicants will receive consideration
            for employment without regard to race, skin color,
            religion, sex, sexual orientation, gender identity,
            disability, veteran status, or any other protected category.
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobContainer
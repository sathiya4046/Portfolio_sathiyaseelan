import React from 'react'
import './education.css'

const Education = () => {
  return (
    <div className="container" id="education">
          <h1 className='text-center py-4 my-md-5 education fw-bold'>Education</h1>
          <table className="table table-hover table-sm text-center">
            <thead>
              <tr>
                <th className="p-3 p-md-4" scope="col">Course</th>
                <th className="p-3 p-md-4" scope="col">College / School</th>
                <th className="p-3 p-md-4" scope="col">Percentage</th>
                <th className="p-3 p-md-4" scope="col">Passed out</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 p-md-4">B.E</td>
                <td className="p-3 p-md-4">University College Of Engineering, Thirukkuvalai, Nagappattinam</td>
                <td className="p-3 p-md-4">69.4%</td>
                <td className="p-3 p-md-4">2015</td>
              </tr>
              <tr>
                <td className="p-3 p-md-4">HSC</td>
                <td className="p-3 p-md-4">St. Antony’s Higher Secondary School, Thanjavur</td>
                <td className="p-3 p-md-4">83%</td>
                <td className="p-3 p-md-4">2011</td>
              </tr>
              <tr>
                <td className="p-3 p-md-4">SSLC</td>
                <td className="p-3 p-md-4">St. Antony’s Higher Secondary School, Thanjavur</td>
                <td className="p-3 p-md-4">89%</td>
                <td className="p-3 p-md-4">2009</td>
              </tr>
            </tbody>
          </table>
        </div>
  )
}

export default Education
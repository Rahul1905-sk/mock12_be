import { Input, Select, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { baseUrl } from "./Url";
import axios from "axios";

const init = {
  company: "",
  city: "",
  location: "",
  role: "",
  level: "",
  position: "",
  language: "",
  contract: "",
};


const JobPosting = () => {
  const [formData, setFormData] = useState(init);

  const handleForm = (e) => {
    e.preventDefault();
    if(formData.language) {
      const  r = formData.language.split(" ");
      formData.language = r;
    }
    formData.postedAt = Date()
    postData(formData);
  };


  const postData  = async(formData) => {
 
    let res = await axios.post(`${baseUrl}/jobData`,formData);
    // res = await res.json()
    console.log(res.data);
    console.log(formData);
  }

  return (
    <Stack w={"60%"} m={"auto"}>
      <form onSubmit={handleForm}>
        <Input
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          type="text"
          placeholder="Enter Company Name"
        />
        <Input
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          type="text"
          placeholder="Enter City"
        />
        <Input
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          type="text"
          placeholder="Enter Location"
        />
        <Select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </Select>
        <Select
          value={formData.level}
          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
        >
          <option value="">Select Level</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </Select>
        <Select
          value={formData.position}
          onChange={(e) =>
            setFormData({ ...formData, position: e.target.value })
          }
        >
          <option value="">Select Position</option>
          <option value="backendDeveloper">Backend Developer</option>
          <option value="JuniorFrontendDeveloper">
            Junior Frontend Developer
          </option>
          <option value="JuniorBackendDeveloper">
            Junior Backend Developer
          </option>
          <option value="fsd">FSD</option>
        </Select>

        <Input
          placeholder="Enter Language"
          type="text"
          value={formData.language}
          onChange={(e) =>
            setFormData({ ...formData, language: e.target.value })
          }
        />
        <Select
          value={formData.contract}
          onChange={(e) =>
            setFormData({ ...formData, contract: e.target.value })
          }
        >
          <option value="">Select Contract </option>
          <option value="fullTime">Full Time</option>
          <option value="partTime">Part Time</option>
        </Select>
        <Input type="submit" value={"Submit"} />
      </form>
    </Stack>
  );
};

export default JobPosting;

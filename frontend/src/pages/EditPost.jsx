import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ImCross } from "react-icons/im";
function EditPost() {
    const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  function deleteCategory(i) {
    console.log(i)
    let updatedCats = [...cats];
    updatedCats.splice(i,1);
    console.log(updatedCats)
    setCats(updatedCats);
  }

  function addCategory() {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat("");
    setCats(updatedCats);
    console.log(cats)
  }


  return (
      <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl mt-8">Update a post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
          <input
            type="text"
            placeholder="Enter psot title"
            className="px-4 py-2 outline-none"
          />
          <input type="file" placeholder="Enter psot title" className="px-4 " />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="px-4 py-2 outline-none"
                placeholder="Enter post category"
                type="text"
              />
              <div
                onClick={addCategory}
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
              >
                Add
              </div>
            </div>
            {/* Categories */}
            <div className="flex px-4 mt-3">
              {cats?.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                >
                  <p>{item}</p>
                  <p
                    onClick={() => deleteCategory(index)}
                    className="text-white"
                  >
                    <ImCross/>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="px-4 py-2 outline-none"
            placeholder="Enter post description"
          />
          <button className="bg-black w-full md:w-[29%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg ">Update</button>
        </form>
      </div>
    </div>
  )
}

export default EditPost

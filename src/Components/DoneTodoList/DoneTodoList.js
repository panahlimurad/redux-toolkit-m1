import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { booleanDoneList } from "../../features/boolean/booleanSlice";
import { AnimatePresence, motion } from "framer-motion";
import { deleteDataDonelist } from "../../features/boolean/dataSlice";

function DoneTodoList() {
    const dispatch = useDispatch();
    const doneList = useSelector((state) => state.boolean.doneListValue);
    const doneData = useSelector((state) => state.data.dataDone);
    const length = doneData.length
  

    const deleteItem = (indexNumber)=>{
      dispatch(deleteDataDonelist(indexNumber))
    }

    return (
      <div className="w-[40%] mt-10 flex gap-6 flex-col items-center">
        <div
          onClick={() => dispatch(booleanDoneList())}
          className="bg-[#379777] rounded-md flex h-10 items-center justify-between w-full px-5 cursor-pointer"
        >
          <h1 className="text-white">DONE LIST</h1>
          <p className="bg-white rounded-full px-2">{length}</p>
        </div>
        <AnimatePresence>
  
        {doneList && (
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                }}
                className="bg-[#389777] flex flex-col py-2 rounded-md w-full px-2 h-[200px]"
                >
            <ul className="relative">
           {doneData.map((item, index) => (
                <li key={index}  className="text-white flex justify-between px-2 gap-4">{item}
                <AnimatePresence>
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                      transition: { duration: 0.5 },
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="absolute right-2 text-[#3DC2EC]"
                        >
                        <DeleteIcon onClick={() => deleteItem(item)} className="cursor-pointer text-white" />
                    </motion.div>
                </AnimatePresence>
                </li>
           ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    );
    }
    
export default DoneTodoList;

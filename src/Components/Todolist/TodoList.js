import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import {
  booleanTodoList,
  iconToggle,
} from "../../features/boolean/booleanSlice";
import { AnimatePresence, motion } from "framer-motion";
import {
  deleteDataRedux,
  setDataDoneRedux,
} from "../../features/boolean/dataSlice";

function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.boolean.todoListValue);
  const arrayData = useSelector((state) => state.data.data);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const length = arrayData.length;
  const handleIcon = (indexNumber) => {
    setExpandedIndex(expandedIndex === indexNumber ? null : indexNumber);
  };

  const sendDataDoneList = (indexNumber) => {
    dispatch(setDataDoneRedux(indexNumber));
    dispatch(deleteDataRedux(indexNumber));
  };

  return (
    <div className="w-[40%] mt-10 flex gap-6 flex-col items-center">
      <div
        onClick={() => dispatch(booleanTodoList())}
        className="bg-[#379777] rounded-md flex h-10 items-center justify-between w-full px-5 cursor-pointer"
      >
        <h1 className="text-white">TODO LIST</h1>
        <p className="bg-white rounded-full px-2 text-red-700">{length}</p>
      </div>
      <AnimatePresence>
        {todoList && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-[#389777] gap-2 flex flex-col py-2 rounded-md w-full px-2 h-[200px]"
          >
            <ul className="relative">
              {arrayData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleIcon(index)}
                  className="text-white flex justify-between px-2 gap-4"
                >
                  {item}
                  <AddIcon
                    onClick={() => dispatch(iconToggle())}
                    className="text-white cursor-pointer"
                  />
                  <AnimatePresence>
                    {expandedIndex === index && (
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
                        className="absolute right-10 flex gap-4 text-[#3DC2EC]"
                      >
                        <DoneIcon
                          onClick={() => sendDataDoneList(item)}
                          className="cursor-pointer"
                        />
                      </motion.div>
                    )}
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

export default TodoList;

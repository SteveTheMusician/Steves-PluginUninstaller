import { useState, useEffect, createContext, useContext } from "react";
import Dialog from '../components/Dialog/Dialog';
import { userSystem } from "./userSystem";
const KnowledgeContext = createContext(null);

export function useKnowledge() {
  return useContext(KnowledgeContext);
}

export default function KnowledgeProvider({ children }) {
  const [knowledge, setKnowledge] = useState(null);
  useEffect(() => {
    let mounted = true;
    parseKnowledge()
      .then((data) => {
        if (mounted) setKnowledge(data);
      })
      .catch((e) => console.error(e));
    return () => { mounted = false;};
  }, []);
  return (
    <KnowledgeContext.Provider value={{knowledge,userSystem}}>
      {knowledge !== null ? children: <Dialog dialogType={'error'} dialogText={'Unable to load knowledge json files.'} showDialogTrigger={true}/>}
    </KnowledgeContext.Provider>
  );
}

async function parseKnowledge() {

  try {
    const knowledgeData = await import(`../brainData/${userSystem}/knowledge.json`);
    return knowledgeData.default ?? knowledgeData;
  } catch (e) {
    console.error(e);
    return null;
  }
}
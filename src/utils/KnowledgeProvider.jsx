import { useState, useEffect, createContext, useContext } from "react";
import Dialog from '../components/Dialog/Dialog';
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
    <KnowledgeContext.Provider value={knowledge}>
      {knowledge !== null ? children: <Dialog dialogType={'error'} dialogText={'Knowledge Daten konntennicht geladen werden'} setShowDialog={true}/>}
    </KnowledgeContext.Provider>
  );
}

async function parseKnowledge() {
  const userSystem = "windows";
  try {
    const knowledgeData = await import(`../brainData/${userSystem}/knowledge.json`);
    return knowledgeData.default ?? knowledgeData;
  } catch (e) {
    console.error(e);
    return null;
  }
}
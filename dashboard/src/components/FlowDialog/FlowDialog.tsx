import TaskTree from "./TaskTree";

import { useEffect, useMemo, useState } from "react";

const FlowDialog = ({ open, setOpen, steps }) => {
  const [visibleNodes, setVisibleNodes] = useState([]);
  const [loadingNodes, setLoadingNodes] = useState([]);
  const [loadedNodes, setLoadedNodes] = useState([]);

  const treeData = useMemo(() => {
    if (!steps || steps.length === 0) return null;

    const sortedSteps = [...steps].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    const root = {
      ...sortedSteps[0],
      nodeId: `node-0`,
      children: [],
    };

    let currentNode = root;
    for (let i = 1; i < sortedSteps.length; i++) {
      const newNode = {
        ...sortedSteps[i],
        nodeId: `node-${i}`,
        children: [],
      };
      currentNode.children = [newNode];
      currentNode = newNode;
    }

    return root;
  }, [steps]);

  const getAllNodeIds = (node, ids = []) => {
    if (!node) return ids;
    ids.push(node.nodeId);
    node.children?.forEach((child) => getAllNodeIds(child, ids));
    return ids;
  };

  useEffect(() => {
    if (open && treeData) {
      const nodeIds = getAllNodeIds(treeData);
      setVisibleNodes(nodeIds);

      const newLoadingNodes = nodeIds.filter(
        (nodeId) => !loadedNodes.includes(nodeId)
      );
      setLoadingNodes(newLoadingNodes);

      if (newLoadingNodes.length > 0) {
        setTimeout(() => {
          setLoadingNodes([]);
          setLoadedNodes((prev) => [...prev, ...newLoadingNodes]);
        }, 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, treeData, loadedNodes]);

  if (!treeData) return null;

  return (
    <TaskTree
      open={open}
      setOpen={setOpen}
      treeData={treeData}
      visibleNodes={visibleNodes}
      loadingNodes={loadingNodes}
    />
  );
};

export default FlowDialog;

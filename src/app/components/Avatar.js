"use client";
import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

export default function SimpleAvatar({ wave, ...props }) {
  // const { scene } = useGLTF("/models/avatar.glb");
  const {scene} = useGLTF("/models/avatar_compressed.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const leftEyeBone = useRef();
  const rightEyeBone = useRef();
  const headBone = useRef();
  const rightArm = useRef();
  const rightForeArm = useRef();
  const initialRightArmRotation = useRef(new THREE.Euler());
  const initialRightForeArmRotation = useRef(new THREE.Euler());
  const [morphTargets, setMorphTargets] = useState([]);
  const wavePhase = useRef(0);
  const [isWaving, setIsWaving] = useState(false);
  const { mouse, camera, viewport } = useThree();

  useEffect(() => {
    const targets = [];
    clone.traverse((child) => {
      if (child.isMesh && child.morphTargetDictionary) {
        const smileIndex = child.morphTargetDictionary["mouthSmile"];
        const openIndex = child.morphTargetDictionary["mouthOpen"];

        if (smileIndex !== undefined) {
          child.morphTargetInfluences[smileIndex] = 0.3;
        }
        if (openIndex !== undefined) {
          child.morphTargetInfluences[openIndex] = 0;
        }

        targets.push(child); // Store mesh reference
      }

      if (!child.isBone) return;

      // Apply initial rotations
      if (child.name === "LeftArm") {
        child.rotation.z = -0.3;
        child.rotation.x = 1.2;
        child.rotation.y = 0.7;
      }
      if (child.name === "RightArm") {
        child.rotation.z = 0.1; //aagy peechy
        child.rotation.x = 1.2; //left right
        child.rotation.y = -0.3;
        rightArm.current = child;
        initialRightArmRotation.current.copy(child.rotation);
      }
      if (child.name === "LeftForeArm") {
        child.rotation.x = -0.2;
      }
      if (child.name === "RightForeArm") {
        child.rotation.x = -0.2;
        rightForeArm.current = child;
        initialRightForeArmRotation.current.copy(child.rotation);
      }

      if (child.name === "LeftUpLeg") {
        child.rotation.x = -0.01;
        child.rotation.y = 0.06;
      }
      if (child.name === "RightUpLeg") {
        child.rotation.z = 3.2;
        child.rotation.y = -0.05;
      }

      if (child.name === "LeftEye") leftEyeBone.current = child;
      if (child.name === "RightEye") rightEyeBone.current = child;
      if (child.name === "Head") headBone.current = child;
    });
    setMorphTargets(targets);
  }, [clone]);

  useFrame(() => {
    const { x: mx, y: my } = mouse;

    // Head rotation
    if (headBone.current) {
      const headTarget = new THREE.Vector3(mx * 0.5, -my * 0.3, 1);
      const headQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(headTarget.y, headTarget.x, 0, "YXZ")
      );
      headBone.current.quaternion.slerp(headQuat, 0.1);
    }

    // Eye rotation
    if (leftEyeBone.current && rightEyeBone.current) {
      const eyeRotX = -my * 0.2;
      const eyeRotY = mx * 0.2;
      const eyeQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(eyeRotX, eyeRotY, 0, "YXZ")
      );
      leftEyeBone.current.quaternion.slerp(eyeQuat, 0.2);
      rightEyeBone.current.quaternion.slerp(eyeQuat, 0.2);
    }

    // Waving animation
    if (wave && rightForeArm.current && rightArm.current) {
      wavePhase.current += 0.15;
      const wave = Math.sin(wavePhase.current) * 0.4;
      rightArm.current.rotation.x = 0.8;
      rightForeArm.current.rotation.x = -2.2 + wave;
      rightForeArm.current.rotation.y = 1.9;
      rightForeArm.current.rotation.z = 0.2;

      morphTargets.forEach((mesh) => {
        if (mesh.morphTargetInfluences) {
          mesh.morphTargetInfluences[0] = 0.2; // mouthOpen
          mesh.morphTargetInfluences[1] = 0.6; // mouthSmile
        }
      });
    } else if (!wave && rightArm.current && rightForeArm.current) {
      // Reset to initial positions when not waving
      rightArm.current.rotation.copy(initialRightArmRotation.current);
      rightForeArm.current.rotation.copy(initialRightForeArmRotation.current);
      
      morphTargets.forEach((mesh) => {
        if (mesh.morphTargetInfluences) {
          mesh.morphTargetInfluences[0] = 0;
          mesh.morphTargetInfluences[1] = 0.3;
        }
      });
    }
  });

  return <primitive object={clone} {...props}  />;
}

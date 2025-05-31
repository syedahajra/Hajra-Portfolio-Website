"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

export default function SimpleAvatar(props) {
  const { scene } = useGLTF("/models/avatar.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const leftEyeBone = useRef();
  const rightEyeBone = useRef();
  const headBone = useRef();
  const { mouse, camera, viewport } = useThree();

  useEffect(() => {
    clone.traverse((child) => {
      if (child.isBone) {
        if (child.name === "LeftEye") leftEyeBone.current = child;
        if (child.name === "RightEye") rightEyeBone.current = child;
        if (child.name === "Head") headBone.current = child;
      }
    });
  }, [clone]);

  useFrame(() => {
    const { x: mx, y: my } = mouse;

    // Head rotation
    if (headBone.current) {
      const head = headBone.current;
      const headTarget = new THREE.Vector3(mx * 0.5, -my * 0.3, 1);
      const headQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(headTarget.y, headTarget.x, 0, "YXZ")
      );
      head.quaternion.slerp(headQuat, 0.1);
    }

    // Eyes rotation
    if (leftEyeBone.current && rightEyeBone.current) {
      const eyeRotX = -my * 0.2;
      const eyeRotY = mx * 0.2;

      const eyeQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(eyeRotX, eyeRotY, 0, "YXZ")
      );

      leftEyeBone.current.quaternion.slerp(eyeQuat, 0.2);
      rightEyeBone.current.quaternion.slerp(eyeQuat, 0.2);
    }
  });

  return <primitive object={clone} {...props} />;
}

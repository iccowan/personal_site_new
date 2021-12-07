import React, { useCallback, useEffect, useState } from "react";
import { ScrollContainerContext } from "react-scroll-motion";
import environment from './environment.js';

const ScrollAnimatorContainer = ({ snap = 'none', children, scrollParent = window }) => {

  const [scrollData, setScrollData] = useState({
    currentY: 0, // 현재 스크롤 위치(px)
    viewportHeight: 0, // 화면 높이(px)
    totalPage: 0, // 총 페이지 수
    totalHeight: 0, // 총 페이지 높이 합 (px)
    totalProgress: 0, // 총 페이지 진행률 (%)
    realPage: 0, // 실수 페이지
    currentPage: 0, // 정수 페이지
    currentProgress: 0, // 현재 페이지 진행률 (%)
  });

  const doSnap = snap != 'none';
  var scrollTimer;

  const scrollEvent = useCallback(() => {
    if (doSnap && scrollTimer)
      clearTimeout(scrollTimer);

    var currentY = scrollParent === window ? window.pageYOffset : (scrollParent).scrollTop;
    var viewportHeight = scrollParent === window? environment.height : (scrollParent).clientHeight;
    var totalPage = children.length || 0;
    var totalHeight = totalPage * (viewportHeight - 1);
    var totalProgress = currentY / totalHeight; // 전체 페이지 진행률 0 ~ 1
    var realPage = currentY / viewportHeight; // 실수 페이지
    var currentPage = Math.floor(realPage);
    var currentProgress = realPage - currentPage; // 현재 페이지 진행률
    setScrollData({
      currentY,
      viewportHeight,
      totalPage,
      totalHeight,
      totalProgress,
      realPage,
      currentPage,
      currentProgress,
    });

    if (doSnap) {
      scrollTimer = setTimeout(() => {
        currentPage = Math.round(realPage);
        let newCurrentY = currentY;
        if (snap === 'mandatory' || Math.abs(currentPage - realPage) < 0.3)
          newCurrentY = currentPage * viewportHeight;

        if (newCurrentY != currentY)
          window.scrollTo({
            top: newCurrentY,
            behavior: 'smooth'
          });
      }, 50);
    }

  }, []);

  useEffect(() => {
    scrollEvent();
    scrollParent.addEventListener("scroll", scrollEvent);
    scrollParent.addEventListener("resize", scrollEvent);
    return () => scrollParent.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, userSelect: "none" }}>
      <ScrollContainerContext.Provider value={scrollData}>
        {children}
      </ScrollContainerContext.Provider>
    </div>
  );
};

export default ScrollAnimatorContainer;

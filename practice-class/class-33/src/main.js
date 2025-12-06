import headerSectionElements from "./sections/header/header";
import leftSidebarElements from "./sections/leftSidebar/leftSidebar";
import bannerAreaElement from "./sections/mainSection/banner";
import { foodCategoryAll } from "./sections/mainSection/foodCategory";
import { foodListAll } from "./sections/mainSection/foodList";


let leftSidebar = document.getElementById('leftSidebar');
leftSidebar.innerHTML = leftSidebarElements;

let headerSection = document.getElementById('headerArea');
headerSection.innerHTML = headerSectionElements;

let bannerSection = document.getElementById('bannerArea');
bannerSection.innerHTML = bannerAreaElement;

let foodCategorySection = document.getElementById('foodCategoryArea');
foodCategorySection.innerHTML = foodCategoryAll;

let foodListSection = document.getElementById('foodListArea');
foodListSection.innerHTML = foodListAll;


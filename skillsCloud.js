jQuery(document).ready(function($) {
    var words = [{
        text: "Objective-C",
        weight: 8
    }, {
        text: "iOS Development",
        weight: 4
    }, {
        text: "Mobile Applications",
        weight: 4
    }, {
        text: "SQL",
        weight: 2
    }, {
        text: "Git",
        weight: 8
    }, {
        text: "REST",
        weight: 7
    }, {
        text: "APIs",
        weight: 7
    }, {
        text: "Photoshop",
        weight: 3
    }, {
        text: "Scrum",
        weight: 8
    }, {
        text: "iOS Design",
        weight: 4
    }, {
        text: "PHP",
        weight: 2
    }, {
        text: "Keynote",
        weight: 3
    }, {
        text: "UX Design",
        weight: 10
    }, {
        text: "MVC Architecture",
        weight: 3
    }, {
        text: "MVVM Architecture",
        weight: 3
    }, {
        text: "Localization",
        weight: 3
    }, {
        text: "Core Data",
        weight: 4
    }, {
        text: "CloudKit",
        weight: 3
    }, {
        text: "Push Notifications",
        weight: 3
    }, {
        text: "Local Notifications",
        weight: 2
    }, {
        text: "IoT",
        weight: 7
    }, {
        text: "C",
        weight: 6
    }, {
        text: "WebSockets",
        weight: 5
    }, {
        text: "Computer Networks",
        weight: 3
    }, {
        text: "UIKit",
        weight: 5
    }, {
        text: "MBaaS",
        weight: 8
    }, {
        text: "Auto Layout",
        weight: 4
    }, {
        text: "Core Animation",
        weight: 4
    }, {
        text: "CocoaPods",
        weight: 5
    }, {
        text: "Dependency Injection",
        weight: 4
    }, {
        text: "Custom View",
        weight: 5
}];

var some_words_with_same_weight =
    $("#mycloud").jQCloud(words, {
        delayedMode: true,
        delay: 500,
    });
});
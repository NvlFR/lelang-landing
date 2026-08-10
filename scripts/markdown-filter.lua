local excluded_div_classes = {
  ["ambient-glow-orb"] = true,
  ["hero-visual"] = true,
  ["mobile-comparison-cards"] = true,
  ["scroll-cue-wrap"] = true,
  ["trust-marquee-section"] = true,
  ["toc-card"] = true
}

function Div(element)
  for _, class_name in ipairs(element.classes) do
    if excluded_div_classes[class_name] then
      return {}
    end
  end

  return element.content
end

function Span(element)
  return element.content
end

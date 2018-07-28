import random, json
names = ["alligator", "anteater", "armadillo", "auroch", "axolotl", "badger", "bat", "bear", "beaver", "blobfish",
         "buffalo", "camel", "chameleon", "cheetah", "chipmunk", "chinchilla", "chupacabra", "cormorant", "coyote",
         "crow", "dingo", "dinosaur", "dog", "dolphin", "dragon", "duck", "dumbo octopus", "elephant", "ferret", "fox",
         "frog", "giraffe", "goose", "gopher", "grizzly", "hamster", "hedgehog", "hippo", "hyena", "jackal",
         "jackalope", "ibex", "ifrit", "iguana", "kangaroo", "kiwi", "koala", "kraken", "lemur", "leopard", "liger",
         "lion", "llama", "manatee", "mink", "monkey", "moose", "narwhal", "nyan cat", "orangutan", "otter", "panda",
         "penguin", "platypus", "python", "pumpkin", "quagga", "quokka", "rabbit", "raccoon", "rhino", "sheep", "shrew",
         "skunk", "slow loris", "squirrel", "tiger", "turtle", "unicorn", "walrus", "wolf", "wolverine", "wombat"]

keywords = ["Access platform", "Ad creative/impression/inventory/rotation",
            "Application  development/ technology", "Architecture", "Artificial intelligence",
            "Banner advertisement", "Business analytics", "Business continuity",
            "Business support systems ( BSS)", "Business to business  (B2B )", "Business to consumer  (B2C )",
            "Business transformation", "C++", "Capital budgets", "Certificate authority", "Change management",
            "Channel  behavior  / conflicts/marketing/  outcomes /profitability/promotion/ satisfaction",
            "Co -branding", "Competitive intelligence", "Component development", "Computer science",
            "Consultant", "Content", "Data controller", "Data gathering", "Data mining /warehousing",
            "Database administra tion /manager", "Database development", "Database integration",
            "Delivery systems", "Digital marketing (pull /push)", "Digital media", "Distribution channels",
            "E-commerce", "E-portal", "Electronic data interchange  (EDI )", "Electronic marketing",
            "Encryption", "End -user  support", "Enterprise systems", "Fault analysis", "Framework",
            "Geographic information system  (GIS )", "Global  HITS", "Graphic design", "Information security",
            "Information technology", "Infrastructure development", "Intellectual property rights ( IPR )",
            "Java", "Knowledge management", "LAN/WAN", "Licensing", "Management information system  (MIS )",
            "Market -space", "Mergers  and  Acquisitions", "Multiplatform integration", "Needs assessment",
            "Network administration /management", "Network solutions", "Online advertising",
            "Operations support systems ( OSS )", "Oracle", "Privacy policy", "Process re -engineering",
            "Product launch/testing", "Program management", "Programming", "Project management",
            "Quality assurance", "Reach", "Research and  development", "Root cause analysis", "SAS/ SPSS",
            "Search engine optimization ( SEO )", "Service provider", "Software configuration",
            "Software engineering", "Solutions delivery /strategies", "Shopping cart", "Storefront",
            "Structured Query Language ( SQL )",
            "Systems administration /  analysis/configuration/deployment/design",
            "Systems development life cycle ( SDLC )", "Target market", "Technic al documentation",
            "Technical support", "Trading", "Turn key", "Unix", "Vendor management", "Visual Basic",
            "Voice over Internet Protocol ( VoIP )", "Vortals (vertical industry portals)", "Web administration",
            "Web based technology", "Yield mana"]

candidates = []
name_list = random.sample(names, 50)
for i in range(50):
    name = name_list[i]
    skills = random.sample(keywords, 10)
    candidates.append({
        "name": "Anonymous " +name.capitalize(),
        "skills": [{"text": s, "value": random.randint(10, 500)} for s in skills]
    })

print(candidates);

with open("src/candidates.json", 'w') as outfile:
    json.dump(candidates, outfile)


